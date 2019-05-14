'use strict';

$("#btn_get_repos").click(function() {
  let userName = prompt("Enter GitHub User Name", '');
  $.ajax({
      type: "GET",
      url: `https://api.github.com/users/${userName}/repos`,
      dataType: "json",
      success: function(result) {
          for(let i in result) {
              $("#repo_list").append(
                  "<li><a href='" + result[i].html_url + "' target='_blank'>" +
                  result[i].name + "</a></li>"
              );
          }
          console.log(result);
          $("#repo_count").append(` Total Repos: ${result.length}`);
      }
  });
});
