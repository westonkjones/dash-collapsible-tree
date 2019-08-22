# Dash Component Boilerplate

This repository contains a [Cookiecutter](https://github.com/audreyr/cookiecutter) template to create your own Dash components.

## Usage

To use this boilerplate:

1. Install the requirements:
    ```
    $ pip install cookiecutter
    $ pip install virtualenv
    ```
   [Node.js/npm is also required.](https://nodejs.org/en/)
2. Run cookiecutter on the boilerplate repo:
    ```
    $ cookiecutter https://github.com/plotly/dash-component-boilerplate.git
    ```
3. Answer the questions about the project.
    - `project_name`: This is the "human-readable" name of your project. For example, "Dash Core Components".
    - `project_shortname`: is derived from the project name, it is the name of the "python library" for your project. By default, this is generated from your `project_name` by lowercasing the name and replacing spaces & `-` with underscores. For example, for "Dash Core Components" this would be "dash_core_components".
    - `component_name`: This is the name of the initial component that is generated. As a javascript class name it should be in PascalCase. defaults to the PascalCase version of `project_shortname`.
    - `r_prefix`: Optional prefix for R components. For example, `dash_core_components` uses "dcc" so the Python `dcc.Input` becomes `dccInput` in R, and `dash_table` uses "dash" to make `dashDataTable`.
    - `author_name` and `author_email`: for package.json and DESCRIPTION (for R) metadata.
    - `github_org`: If you plan to push this to github, enter the organization or username that will own it (for URLs to the project homepage and bug report page)
    - `description`: the project description, included in package.json.
    - `license`: License type for the component library. Plotly recommends the MIT license, but you should read the generated LICENSE file carefully to make sure this is right for you.
    - `publish_on_npm`: Set to false to only serve locally from the package data.
    - `install_dependencies`: Set to false to only generate the project structure.
4. The project will be generated in a folder named with your `project_shortname`.
5. Follow the directions in the generated README to start developing your new Dash component.

Installing the dependencies can take a long time. They will be installed in a
folder named `venv`, created by virtualenv. This ensures that dash is installed
to generate the components in the `build:py_and_r` script of the generated
`package.json`.


## More Resources

- Learn more about Dash: https://dash.plot.ly
- Questions about this project? Create an issue: https://github.com/plotly/dash-component-boilerplate/issues/new
- Watch the [component boilerplate repository](https://github.com/plotly/dash-component-boilerplate) to stay informed of changes to our components.
- [React guide for python developers](https://dash.plot.ly/react-for-python-developers)
- Need help with your component? View the Dash Community Forum: https://community.plot.ly/c/dash
- Examples of Dash component libraries include `dash-core-components`: https://github.com/plotly/dash-core-components and `dash-html-components`: https://github.com/plotly/dash-html-components.
- To get a feel for what's involved in creating a component, read through the [README.MD file that this cookiecutter project generates](%7B%7Bcookiecutter.project_shortname%7D%7D/README.md)
