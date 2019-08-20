# AUTO GENERATED FILE - DO NOT EDIT

dashCollapsibleTree <- function(id=NULL, data=NULL, onChange=NULL, onAction=NULL, onNodeToggle=NULL) {
    
    props <- list(id=id, data=data, onChange=onChange, onAction=onAction, onNodeToggle=onNodeToggle)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashCollapsibleTree',
        namespace = 'dash_collapsible_tree',
        propNames = c('id', 'data', 'onChange', 'onAction', 'onNodeToggle'),
        package = 'dashCollapsibleTree'
        )

    structure(component, class = c('dash_component', 'list'))
}
