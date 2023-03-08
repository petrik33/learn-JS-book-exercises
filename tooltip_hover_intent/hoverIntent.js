'use strict';

// Здесь показан набросок класса
// с возможностями, которые нам понадобятся
class HoverIntent {
  constructor({
    sensitivity = 0.1, // скорость ниже 0.1px/ms значит "курсор на элементе"
    interval = 100, // измеряем скорость каждые 100ms: определяем дистанцию между предыдущей и новой позицией.
    elem,
    over,
    out
  }) {
    this.sensitivity = sensitivity;
    this.interval = interval;
    this.elem = elem;
    this.over = over;
    this.out = out;

    this.prevClientX = -1;
    this.prevClientY = -1;
    this.prevTime = -1;

    this.lastClientX = -1;
    this.lastClientY = -1;
    this.lastTime = -1;

    this.checkSpdInterval = null;

    this.onElem = false;
    this.overElem = false;

    // убедитесь, что "this" сохраняет своё значение для обработчиков.
    this.onMouseMove = (event) => {
      this.lastClientX = event.clientX;
      this.lastClientY = event.clientY;
      this.lastTime = Date.now();
    }

    this.onMouseOver = (event) => {
      if (this.onElem) {
        return;
      }

      this.onElem = true;

      this.prevClientX = event.clientX;
      this.prevClientY = event.clientY;
      this.prevTime = Date.now();

      this.elem.addEventListener("mousemove", this.onMouseMove);
      this.checkSpdInterval = setInterval(this.trackSpeed, this.interval);
    }

    this.trackSpeed = () => {
      let spd;

      if (!this.lastTime || this.lastTime == this.prevTime) {
        spd = 0;
      } else {
        let xMove = this.lastClientX - this.prevClientX;
        let yMove = this.lastClientY - this.prevClientY;
        let dist = Math.sqrt(Math.pow(xMove, 2) + Math.pow(yMove, 2));

        let time = this.lastTime - this.prevTime;

        spd = dist / time;
      }

      if (spd < this.sensitivity) {
        this.overElem = true;
        clearInterval(this.checkSpdInterval);
        this.over.call(this.elem);
      } else {
        this.prevClientX = this.lastClientX;
        this.prevClientY = this.lastClientY;
        this.prevTime = this.lastTime;
      }
    }

    this.onMouseOut = (event) => {
      let toElement = event.relatedTarget;
      if (toElement == this.elem || this.elem.contains(toElement)) {
        return;
      }

      this.onElem = false;
      this.elem.removeEventListener("mousemove", this.onMouseMove);
      clearInterval(this.checkSpdInterval);

      if (this.overElem) {
        this.overElem = false;
        this.out.call(this.elem);
      }
    }

    this.destroy = () => {
      this.elem.removeEventListener("mouseover", this.onMouseOver);
      this.elem.removeEventListener("mouseout", this.onMouseOut);
      this.elem.removeEventListener("mousemove", this.onMouseMove);
    }

    // назначаем обработчики
    elem.addEventListener("mouseover", this.onMouseOver);
    elem.addEventListener("mouseout", this.onMouseOut);
  }

}