import Project from "@/components/project";

export default function StudyCluster() {
  return (
    <Project
      title="Ninja Game"
      description="In my third semester I made a web application with Python,
    Django, Node and VueJs. For this distributed web app I made one
    frontend application with Vuejs and two different Django
    backends. One for handling user authentication and the saving of
    used data, and the other one as my game server. This game server
    uses a websocket for fast back and forth communication between
    client and server. My software testing skills improved a lot
    during this project, I wrote unit, integration and end to end
    tests. I used Cypress to test my frontend. All of these tests
    where automatically run after pushing changes to my Github
    repository because of the CI/CD pipeline."
      image="/assets/S3/CICD.png"
    />
  );
}
