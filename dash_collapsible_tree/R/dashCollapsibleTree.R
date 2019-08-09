# AUTO GENERATED FILE - DO NOT EDIT

dashCollapsibleTree <- function(id=NULL, items=NULL, topIds=NULL) {
    
    props <- list(id=id, items=items, topIds=topIds)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashCollapsibleTree',
        namespace = 'dash_collapsible_tree',
        propNames = c('id', 'items', 'topIds'),
        package = 'dashCollapsibleTree'
        )

    structure(component, class = c('dash_component', 'list'))
}
