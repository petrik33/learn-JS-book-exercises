# Catch links in the element

Make all links inside the element with `id="contents"` ask the user if they really want to leave. And if they don't then don't follow.

Details:

- HTML inside the element may be loaded or regenerated dynamically at any time, so we can't find all links and put handlers on them. Use event delegation.
- The content may have nested tags. Inside links too, like `<a href=".."><i>...</i></a>`.
