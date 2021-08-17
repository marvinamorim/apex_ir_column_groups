# Interactive Report Column Groups
Oracle Apex plugin to show Column Groups over an Interactive Report like they show up using the Interactive Grid.
This plugin uses the native Column Group setup for Interactive Report.


## Instalation
1. Import the file `dynamic_action_plugin_mvx_ir_coluns_group.sql` on your application.
2. Configure the interactive report column groups on Page Design and asign columns to those groups.
3. Create an After Refresh Dynamic Action and set as True Action `IR Column Groups [Plug-In]`.
4. Set up the Static ID for the report, and put this ID on the plugin configuration field `Report Static ID`.
5. Set True for `Fire on Initialization`.
6. Run the page and check it out.

## Pre-requesit
* The grouped columns should be ordered together

## To-do
* Use the saved report columns order, insted the page design columns order.
* Add suport to custom CSS and click events for the groups.