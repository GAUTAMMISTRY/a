const copyButton = document.createElement("button");
  
const i = document.createElement("i");
i.innerHTML="Copy";
i.classList.add("my-float");

copyButton.classList.add("float");


copyButton.appendChild(i);

document.body.appendChild(copyButton);

copyButton.onclick = async (event) => {

if(window.getSelection().toString())
{

  await navigator.clipboard.writeText(window.getSelection());
  copyButton.innerHTML = "Copied!";
  copyButton.disabled = true;
  setTimeout(() => {
    copyButton.innerHTML = "Copy";
    copyButton.disabled = false;
  }, 1000);

}

}