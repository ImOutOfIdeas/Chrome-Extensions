// Elements specific to OSU CSE Homework
const css = document.querySelector("link");
const body = document.querySelector("body");
const links = document.getElementsByTagName("a");
const tableData = document.getElementsByTagName("td");
const headers = document.getElementsByTagName("th");
const textAreas = document.getElementsByTagName("textarea");
const listItems = document.getElementsByTagName("li");

// Ensures the page has a css style before overwriting
if (css) css.href = "https://web.cse.ohio-state.edu/software/web/syntaxhighlighter/styles/shCoreFadeToGrey.css";

// Table headers overwrite
for (var i = 0; i < headers.length; i++) {
    headers[i].style.color = "lightgrey";
    headers[i].style.backgroundColor = "black";
}

// Table body overwrite
for (var i = 0; i < tableData.length; i++) {
    if (tableData[i].parentNode.classList.contains("statement")) {
        tableData[i].style.color = "lightgrey";
        tableData[i].style.backgroundColor = "#353535";
    } else {
        tableData[i].style.color = "lightgrey";
        tableData[i].style.backgroundColor = "#1E1E1E";
    }
}

// Link color overwrite
for (var i = 0; i < links.length; i++) {
    links[i].style.color = "crimson";
}

// Textarea overwrite (height adjustment makes it look better, trust me)
for (var i = 0; i < textAreas.length; i++) {
    textAreas[i].style.height = "16px";
    textAreas[i].style.color = "lightgrey";
    textAreas[i].style.backgroundColor = "#353535";
}

// List item overwrite (adds gap between directions)
for (var i = 0; i < listItems.length; i++) {
    listItems[i].style.marginBlock = "20px";
}

// Body styling
body.style.marginInline = '100px';
body.style.overflowX = "hidden";
body.style.fontFamily = "Inter, sans-serif";
body.style.fontSize = "20px";
body.style.backgroundColor = "#1E1E1E";
body.style.color = "lightgrey";
