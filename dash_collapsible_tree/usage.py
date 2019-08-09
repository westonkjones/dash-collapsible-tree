import dash_collapsible_tree
import dash
import dash_html_components as html

app = dash.Dash(__name__)

input = {
    "items": {
        "0": {
            "id": "0",
            "name": "Root",
        }
    }
}

app.layout = html.Div([
    dash_collapsible_tree.DashCollapsibleTree(
        id='test',
        items=input,
        topIds=["0"],
    ),
    html.Div(id='output')
])

if __name__ == '__main__':
    app.run_server(debug=True)
