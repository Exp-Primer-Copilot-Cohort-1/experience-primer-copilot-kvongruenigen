function skillsMember() {
    var skills = [
        {
            name: "HTML",
            level: "100%"
        },
        {
            name: "CSS",
            level: "90%"
        },
        {
            name: "JavaScript",
            level: "60%"
        },
        {
            name: "PHP",
            level: "50%"
        },
        {
            name: "MySQL",
            level: "40%"
        },
        {
            name: "jQuery",
            level: "50%"
        },
        {
            name: "Bootstrap",
            level: "50%"
        }
    ];

    var skill = document.getElementById("skill-member");
    for (var i = 0; i < skills.length; i++) {
        var skillItem = document.createElement("div");
        skillItem.className = "skill-item";

        var skillName = document.createElement("p");
        skillName.className = "skill-name";
        skillName.innerHTML = skills[i].name;

        var skillLevel = document.createElement("p");
        skillLevel.className = "skill-level";
        skillLevel.innerHTML = skills[i].level;

        var skillBar = document.createElement("div");
        skillBar.className = "skill-bar";
        skillBar.style.width = skills[i].level;

        skillItem.appendChild(skillName);
        skillItem.appendChild(skillLevel);
        skillItem.appendChild(skillBar);

        skill.appendChild(skillItem);
    }
}