this["JST"] = this["JST"] || {};

this["JST"]["form"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-id = \""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "\"";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "value = \""
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "\"";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data}) : helper)))
    + "\" selected>"
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data}) : helper)))
    + "</option>";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data}) : helper)))
    + "\" selected>"
    + alias4(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data}) : helper)))
    + "</option>";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + "\" selected>"
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + "</option>";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"description","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"modal-layer\"></div><div class=\"modal\"><form "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " id=\"form\" action=\"#\" method=\"post\" ><fieldset><dl><dt>Title</dt><dd><input type=\"text\" name=\"title\" id=\"title\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/></dd></dl><dl><dt>Due Date</dt><dd><select id=\"day\" name=\"day\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.day : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<option value=\"\">Day</option><option value=\"01\">1</option><option value=\"02\">2</option><option value=\"03\">3</option><option value=\"04\">4</option><option value=\"05\">5</option><option value=\"06\">6</option><option value=\"07\">7</option><option value=\"08\">8</option><option value=\"01\">9</option><option value=\"10\">10</option><option value=\"11\">11</option><option value=\"12\">12</option><option value=\"13\">13</option><option value=\"14\">14</option><option value=\"15\">15</option><option value=\"16\">16</option><option value=\"17\">17</option><option value=\"18\">18</option><option value=\"19\">19</option><option value=\"20\">20</option><option value=\"21\">21</option><option value=\"22\">22</option><option value=\"23\">23</option><option value=\"24\">24</option><option value=\"25\">25</option><option value=\"26\">26</option><option value=\"27\">27</option><option value=\"28\">28</option><option value=\"29\">29</option><option value=\"30\">30</option><option value=\"31\">31</option></select><span class=\"separator\">/</span></dd><!----><dd><select id=\"month\" name=\"month\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.month : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<option value=\"\">Month</option><option value=\"01\">January</option><option value=\"02\">February</option><option value=\"03\">March</option><option value=\"04\">April</option><option value=\"05\">May</option><option value=\"06\">June</option><option value=\"07\">July</option><option value=\"08\">August</option><option value=\"09\">September</option><option value=\"10\">October</option><option value=\"11\">November</option><option value=\"12\">December</option></select><span class=\"separator\">/</span></dd><!----><dd><select id=\"year\" name=\"year\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.year : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<option value=\"\">Year</option><option value=\"14\">2014</option><option value=\"15\">2015</option><option value=\"16\">2016</option><option value=\"17\">2017</option><option value=\"18\">2018</option><option value=\"19\">2019</option><option value=\"20\">2020</option><option value=\"21\">2021</option><option value=\"22\">2022</option><option value=\"23\">2023</option><option value=\"24\">2024</option><option value=\"25\">2025</option></select></dd></dl><dl><dt>Description</dt><dd><textarea rows=\"6\" cols=\"120\" name=\"description\" id=\"description\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</textarea></dd></dl><dl><dt></dt><dd><div class=\"button-group\"><input type=\"submit\" value=\"Save\" class=\"button save\"><input type=\"button\" value=\"Mark As Complete\" class=\"button complete\" /></div></dd></dl></fieldset></form></div>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<dl class=\"table-title\"><dt>"
    + alias4(((helper = (helper = helpers.selected_title || (depth0 != null ? depth0.selected_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"selected_title","hash":{},"data":data}) : helper)))
    + "</dt><dd><span class=\"todos-count\">"
    + alias4(((helper = (helper = helpers.selected_count || (depth0 != null ? depth0.selected_count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"selected_count","hash":{},"data":data}) : helper)))
    + "</span></dd></dl><table class=\"no-spacing\"><thead><tr id=\"add-todo\"><th><img src=\"images/plus_icon.png\" class=\"logo add\" alt=\"Add\" /> Add new to do</th></tr></thead><tbody id=\"item-area\"></tbody></table>";
},"useData":true});

this["JST"]["sidebar"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><a href=\"#\" class=\"title\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</a><span class=\"todos-count count\">"
    + alias4(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data}) : helper)))
    + "</span></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<nav class=\"nav-left\"><ul class=\"alltodos\"><li><a href=\"#\" class=\"title\"><img src=\"images/todo_icon.png\" class=\"all-logo\" alt=\"All Todos\"/><p class=\"top-title\">All Todos</p></a><div id=\"all-todos-count\" class=\"count\">"
    + alias4(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total","hash":{},"data":data}) : helper)))
    + "</div></li>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.todos : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><ul class=\"completed\"><li><a href=\"#\" class=\"title\"><img src=\"images/completed_icon.png\" class=\"completed-logo\" alt=\"completed\" /><p class=\"top-title\">Completed</p></a><div id=\"complete-todos-count\" class=\"count\">"
    + alias4(((helper = (helper = helpers.completed_total || (depth0 != null ? depth0.completed_total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"completed_total","hash":{},"data":data}) : helper)))
    + "</div></li>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.completes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></nav>";
},"useData":true});

this["JST"]["todo"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class=\"list-item\"><label><input type=\"checkbox\" /><span class=\"checkboxlabel\"></span></label><a href=\"#\" id=\"edit-form\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "- <span class=\"due_date\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span></a> </td><td class=\"delete\"><a href=\"#\" class=\"delete\"><img src=\"images/icon_delete.png\" alt=\"delete\" /></a></td>";
},"useData":true});