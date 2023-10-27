function Skills() {
  return (
    <div className="skills">
      <h1>My Skills</h1>

      <p>HTML</p>
      <div class="container">
        <div class="skills html">90%</div>
      </div>

      <p>CSS</p>
      <div class="container">
        <div class="skills css">80%</div>
      </div>

      <p>JavaScript</p>
      <div class="container">
        <div class="skills js">75%</div>
      </div>

      <p>React</p>
      <div class="container">
        <div class="skills React">70%</div>
      </div>
      <p>Next.js</p>
      <div class="container">
        <div class="skills Next">60%</div>
      </div>
      <p>Node.js</p>
      <div class="container">
        <div class="skills Node">65%</div>
      </div>
      <a href="./assests/resume.pdf" target="blank" class="block m-10 text-center">
  <button class="flex items-center justify-center bg-orange-500 text-black rounded-full px-4 py-2">Resume</button>
</a>





    </div>
  );
}
export default Skills;
