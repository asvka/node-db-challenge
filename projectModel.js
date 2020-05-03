const db = require('./config')

function findById(id) {
    return db("projects")
        .where({ id })
        .first()
}

function addResource(resource) {
    return db("resources")
        .insert(resource)
        .then(id => { 
            return findById(id[0])
        });
}

function getResources() {
    return db("resources")
}

function addProject(project) {
    return db("projects")
        .insert(project)
        .then(id => { 
            return findById(id[0])
        });
}

function getProjects() {
    return db("projects")
}

function addTask(task) {
    return db("tasks")
        .insert(task)
        .then(id => { 
            return findById(id[0])
        });
}

function getTasks(project_id) {
    return db("tasks as t")
            .join("projects as p", "p.id","t.project_id" )
            .select("p.name", "p.description", "t.task_description", "t.notes", "t.completed")
            .where({ project_id })
} 

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks
}