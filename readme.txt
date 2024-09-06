=== Svg Object Block ===
Contributors:      John-Paul Takats
Tags:              SVG Object block
Tested up to:      6.6
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A gutenberg block that allows you to add an SVG in an object element

== Description ==

This is a wordpress plugin that adds a gutenberg block in which you can add an SVG to your page.

Why? 
- You don't need to add support to the core image block for svgs in the functions.php
- Instead of adding the SVG into the image (<img>) element (like what it would do if you add SVG support 
to the core image block for SVGs), SVGs are placed in an object block instead. This allows
you to manipulate the SVG in javascript and do all sorts of cool stuff with it. 
SVGs added just in the <img> block cannot be altered or interacted with in the DOM.
However if they are in an <object> they can. So for example you could find an element
in an SVG file and add a rollover effect or transform it using javascript.

== Installation ==

If you just want to install it as is, get the zip file called "wp-svg-object-plugin-installer.zip"

OR

1. Upload the plugin files to the `/wp-content/plugins/svg-object-block` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress.

If you want to develop or add to it, download the whole folder. You will need to build it to 
get all the node modules as I did not add those to this repo (npm run)


== Frequently Asked Questions ==

Coming Soon

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

== Changelog ==

= 0.1.0 =
* Release

== Other Stuff ==
My homepage can be found at jptweb.com
