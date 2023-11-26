var num = 0;

function button1()
{
	num++;
	document.getElementById('output').innerHTML = num;
}

function load_style()
{
	page_style = localStorage.getItem("page_stylesheet_name", "style.css");
	if (page_style === null)
	{
		page_style = "style.css";
	}
	document.getElementById('page_style').setAttribute("href", page_style);
}

function flower()
{
    localStorage.setItem("page_stylesheet_name", "style.css");
	load_style();
}

function mountain()
{
    localStorage.setItem("page_stylesheet_name", "style2.css");
	load_style();
}

load_style()  // load style immediately