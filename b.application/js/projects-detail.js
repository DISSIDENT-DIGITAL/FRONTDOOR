
/*
    FRONTDOOR - PROJECT DETAIL

    Reads the selected project ID from the URL
    and displays the corresponding information.
*/

// 1. read the URL parameters
const parameters = new URLSearchParams(window.location.search);

// 2.get the project ID
const projectId = parameters.get("id");

// 3. get selected project
const selectedProject = projects[projectId];

// 4.Displaying the project information
if (selectedProject) {

    document.getElementById("project-title").textContent =
        selectedProject.title;

    document.getElementById("project-description").textContent =
        selectedProject.description;

    document.getElementById("project-content").textContent =
        selectedProject.content;

    document.querySelector(".project-intro .section-label").textContent =
        "PROJECT " + projectId;

    document.title = "FRONTDOOR | " + selectedProject.title;

} else {

    //If the project does not exist...
    document.getElementById("project-title").textContent =
        "PROJECT NOT FOUND";

    document.getElementById("project-description").textContent =
        "This project does not exist in FRONTDOOR.";

    document.getElementById("project-content").textContent = "";

    document.querySelector(".project-intro .section-label").textContent =
        "UNKNOWN PROJECT";
}

