# AUTO GENERATED FILE - DO NOT EDIT

dashCollapsibleTree <- function(id=NULL, data=NULL) {
    
    props <- list(id=id, data=data)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashCollapsibleTree',
        namespace = 'dash_collapsible_tree',
        propNames = c('id', 'data'),
        package = 'dashCollapsibleTree'
        )

    structure(component, class = c('dash_component', 'list'))
}
