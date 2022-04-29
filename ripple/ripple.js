const btn = document.getElementById("button");

let playAnimation = (event) => {
    const rect = event.target.getBoundingClientRect();

    const clientX = event.clientX;
    const clientY = event.clientY;

    const clientXinBtn = clientX - rect.x;
    const clientYinBtn = clientY - rect.y;

    console.log(rect);
    console.log(clientX);
    console.log(clientY);
    console.log(clientXinBtn);
    console.log(clientYinBtn);

    const rippleDomElement = document.createElement("span");
    rippleDomElement.className = "ripple";

    rippleDomElement.style.top = `${clientYinBtn}px`;
    rippleDomElement.style.left = `${clientXinBtn}px`;

    const removeFunction = () => {
        btn.removeChild(rippleDomElement);
    };

    rippleDomElement.addEventListener("animationend", removeFunction);

    btn.appendChild(rippleDomElement);
};

btn.addEventListener("click", playAnimation);
