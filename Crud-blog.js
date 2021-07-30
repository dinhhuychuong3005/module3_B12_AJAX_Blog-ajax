
function showListBlog() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/blogs",
        success: function (blogList)  {
            let str = "<table class='table table-dark table-striped'>" + "<tr>" +
                "<th>title</th>" +
                "<th>content</th>" +
                "<th>category name</th>" +
                "</tr>" + "</table>";
            console.log(blogList)
            for (let i = 0; i < blogList.length; i++) {
                str += getBlog(blogList[i]);
            }
            document.getElementById('main').innerHTML = str;
        }
    });
}

function getBlog(blog) {
    return "<tr>" +
        "<td>blog.title</td>" +
        "<td>blog.content</td>" +
        "<td>blog.category.name</td>" +
        "</tr>"
}