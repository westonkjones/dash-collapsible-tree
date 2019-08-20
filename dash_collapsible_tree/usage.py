import dash_collapsible_tree
import dash
import dash_html_components as html

app = dash.Dash(__name__)

data = [
    {
        'id': 1,
        'name': 'Root',
        'isExpanded': True
    },
    {
        'id': 2,
        'name': 'B',
        'children': [
            {
                'id': 1,
                'name': 'B-1',
            },
            {
                'id': 2,
                'name': 'B-2',
            }
        ]
    }
]

app.layout = html.Div([
    dash_collapsible_tree.DashCollapsibleTree(
        id='test',
        data=data
    ),
    html.Div(id='output')
])

if __name__ == '__main__':
    app.run_server(debug=True)
