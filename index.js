
window.addEventListener('mousemove', function (e) {
    const anchor = document.getElementById('anchor');
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let rekt = anchor.getBoundingClientRect()
    let anchorX = rekt.left+rekt.width/2;
    let anchorY = rekt.top+rekt.height/2;

    let angleDeg = angle(mouseX,mouseY, anchorX, anchorY);
    console.log(angleDeg);
    anchor.style.transform = 'rotate('+angleDeg+'deg)';
    
});

function angle(cx,cy,ex,ey)
{
    const dy = ey-cy;
    const dx = ex-cx;
    const rad = Math.atan2(dy,dx);
    const deg = rad*180/Math.PI;
    return deg;
}