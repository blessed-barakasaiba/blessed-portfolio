
const Skills = () => {
  const skills = [
    {id:1, skill:"Backend", color:"cyan", description:"Django Backend with real time"},
    {id:1, skill:"Backend", color:"cyan", description:"Django Backend with real time"},
    {id:1, skill:"Backend", color:"cyan", description:"Django Backend with real time"},
    {id:1, skill:"Backend", color:"cyan", description:"Django Backend with real time"},
  ]
  return (
    <div id="skills" className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {skills.map((skill)=>(
            <div key={skill.id} className="flex justify-center">
              <div className="flex justify-center p-2 text-green">
                <p>2019</p>
                <p>Completed Secondary School</p>
              </div>
              <div>
                <h2>2022</h2>
                <p>Joining University Of Mbeya Secondary School</p>
              </div>

            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Skills