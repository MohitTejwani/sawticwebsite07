// quick fix for the incorrect font height of H2 heading in blog posts
if(!typeof dataModel) {
    if (window.dataModel.page.pageInfo.sitecoreTemplateName == "reinventblogpostpage")
    {
    var style = document.createElement('style');
    style.innerHTML = 'h2{font-size:1.25rem;line-height:1.2em}@media screen and (min-width:1000px){h2{font-size:2.188rem;line-height:1.2em}}';
    document.head.appendChild(style);
    console.log("blog h2 custom header");
    };
};