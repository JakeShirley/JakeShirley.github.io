---
title: Chronomancers
description: A school game project with a wxWidgets editor, Lua bindings, and a component-based engine.
image: /media/school-projects/chronomancers/level-editor.png
category: school-projects
mediaPath: /media/school-projects/chronomancers
media:
  - type: photo
    heading: Screenshots
    src: level-editor.png
    alt: Chronomancers level in the editor, with component properties and an object list.
    width: 1680
    height: 1010
  - type: photo
    src: level-wireframe.png
    alt: Chronomancers level with colored portals and wireframe geometry in the editor.
    width: 1680
    height: 1010
  - type: photo
    src: editor-settings.png
    alt: Editor with graphics and physics settings beside a test scene.
    width: 1680
    height: 1050
  - type: photo
    src: lua-editor.png
    alt: Lua script in the editor, with help for the Engine Connect function.
    width: 1680
    height: 1050
    caption: Editor includes in-line documentation for engine methods.
  - type: photo
    src: lua-completion.png
    alt: Lua script with a list of engine methods in the editor.
    width: 1680
    height: 1050
  - type: photo
    src: component-editor.png
    alt: Component properties with a material list for the selected game object.
    width: 1680
    height: 1050
  - type: photo
    src: lua-documentation.png
    alt: Lua documentation with a class list, methods, and parameter types.
    width: 1680
    height: 1010
    caption: Built-in Lua reference documentation.
  - type: photo
    src: lua-function-help.png
    alt: Help for the RegisterEnum method beside the Lua code.
    width: 1680
    height: 1010
  - type: photo
    src: lua-object-methods.png
    alt: List of game object methods in the Lua script editor.
    width: 1680
    height: 1010
  - type: photo
    src: unused-event-error.png
    alt: Error message for an unused script event beside the Lua code.
    width: 1680
    height: 1010
  - type: photo
    src: deleted-object-error.png
    alt: Error message for access to a deleted object beside the Lua code.
    width: 1680
    height: 1010
---

Chronomancers is a school game project. As the lead programmer, I worked on the editor, Lua bindings, and core engine functionality.

My role was lead programer and engine architect.

[See Chronomancers on DigiPen](https://www.digipen.edu/showcase/student-games/chronomancers).

## My Work

- I built a [wxWidgets-based](https://wxwidgets.org/) editor with scripting tools that made it easier for designers and artists to create custom game content.
- I added Lua bindings that used metadata to show documentation directly in the editor.  In-editor debugging with breakpoints and exception handling was also implemented.
- The engine used a traditional component-based architecture that was extendable from Lua.