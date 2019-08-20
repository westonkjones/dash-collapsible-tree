import dash_collapsible_tree
import dash
import dash_html_components as html

app = dash.Dash(__name__)

data = {
  'label': 'search me',
  'value': 'searchme',
  'children': [
    {
      'label': 'search me too',
      'value': 'searchmetoo',
      'children': [
        {
          'label': 'No one can get me',
          'value': 'anonymous',
        },
      ],
    },
  ],
}
app.layout = html.Div([
    dash_collapsible_tree.DashCollapsibleTree(
        id='test',
        data=data
    ),
    html.Div(id='output')
])

if __name__ == '__main__':
    app.run_server(debug=True)
