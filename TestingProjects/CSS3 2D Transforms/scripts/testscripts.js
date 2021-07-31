
var transformed = false;
function applyTransform() 
{
    element = document.getElementById("testarea");
    btn = document.getElementById("transformBtn");
    btn.setAttribute("disabled", "true");
    
    if (!transformed) 
    {
        btn.value = "(Un)Transform";
        element.className = "transformedDiv";
    }
    else 
    {
        btn.value = "Transform";
        element.className = "noTransformDiv";
    }
    
    btn.removeAttribute("disabled");
    transformed = !transformed;
}
