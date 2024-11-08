# Individual Task for Songhong Han
 
## Instructions on how to interact with the work
I chose perlin noice to animate, so the picture is a continuous, circular, smooth and fluid animation. 
It doesn't need any interaction to trigger, just click on the page and it starts running.

## Individual approach to animating the group code
I chose "perlin noice". 
Since our picture is a landscape, I decided to use perlin noice to drive the two parts of the building, the water reflection and the water ripple. Both of these parts move slowly and smoothly in a circular motion, which I want to achieve the effect of water surface fluctuation.

## References
My inspiration comes from perlin noice described in week 10 tut, 
but the style of the picture was completed after my own thinking, and I did not find similar references on the Internet for support.
[
](https://canvas.sydney.edu.au/courses/60108/pages/week-10-tutorial?module_item_id=2440198)

let segmentList = [];
let waveList = [];
let t = 0;

## Technical explanation
function updateSvg() {
    // Left-right shaking for reflections
    for (let i = 0; i < segmentList.length; i++) {
        let x = segmentList[i].x;
        let offsetX = noise(t + i * 0.1) * 100;
        segmentList[i].segment.setAttribute("x", x + offsetX);
    }

    // Up-down floating for waves
    for (let i = 0; i < waveList.length; i++) {
        let y = noise(t + i * 0.1) * 50;
        let cx = waveList[i].cx;
        let cy = waveList[i].cy - 50 + y;
        let rx = waveList[i].rx;
        let ry = waveList[i].ry;
        waveList[i].wave.setAttribute("d", `M${cx - rx},${cy} A${rx},${ry} 0 1,0 ${cx + rx},${cy}`);
    }
    t += 0.01;
}

# Code Analysis:
Reflection Shaking:
segmentList stores each reflection segment's original x-coordinate.
offsetX = noise(t + i * 0.1) * 100 generates a shaking offset for x, creating a natural left-right movement effect.
The Perlin noise function takes in t + i * 0.1, producing smooth, independent variations per segment.

Wave Floating:
waveList contains wave objects with their original center points (cx, cy).
y = noise(t + i * 0.1) * 50 computes a vertical offset for each wave's cy, creating an up-down floating effect.
The wave’s d attribute is updated with these coordinates, making waves appear to move naturally.

# Summary:
By calling updateSvg repeatedly, Perlin noise adds realistic, gentle shaking to the reflections and floating to the waves, creating a lifelike animated effect.
