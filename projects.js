

class Project {
    constructor(title='Lorem Ipsum',tag='', description='Lorem Ipsum is a sample project', href='https://www.google.com', image_href='') {
        this.title = title;
        this.description = description;
        this.href = href;
        this.image_href = image_href;
        this.tag = tag;
    }

    getTitle(){
        return this.title;
    }
    getDescription(){
        return this.description;
    }
    getHref(){
        return this.href;
    }
    getImage_href() {
        if (this.image_href && this.image_href.includes('drive.google.com')) {
            let id = this.image_href.split('/d/')[1].split('/')[0];
            return 'https://drive.google.com/thumbnail?id=' + id;    
        } else {
            return this.image_href
        }
    }
}

export const projects = [];

projects.push(new Project('Simple local eCommerce', '[Study project]', 'Mockup and deploy a simple eCommerce based on Wallapop','https://github.com/pablogomezponce/PW_PWPOP_GROUP_06','https://drive.google.com/file/d/13lsRZMLVFU5t4sDFv47yJK5CVlMOCtAq/view'));
projects.push(new Project('Remote user testing','[Internship delivery]', 'No cost remote user test for desktop platforms workflow and protocol', 'https://drive.google.com/file/d/15DpZiUZB4I0sveJ57eOS2PsNeMNTbIg_/view?usp=sharing', 'https://estudy.salle.url.edu/pluginfile.php/1/theme_moove/logo/1601481989/logo-lasalle-estudy.png'));
projects.push(new Project('Simple pomodoro web app','[Discontinued]', 'React Native for Web app to manage study sprints', 'https://pgomezponce.github.io/gtd-timer/','https://avatars1.githubusercontent.com/u/9919?s=200&v=4'));
projects.push(new Project('Pomodoro app redesign', '[In Progress]', 'Visual redefinition for "Simple Pomodoro Web App"', 'https://drive.google.com/file/d/1TElnm_V5T1cjOnJs8K-BznVfs4LlPUdR/view?usp=sharing', 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/xd.svg'))
projects.push(new Project("Interaction dashboard", "[In progress]", "Project associated to the GRETEL group. It is based on LEDA Principles and based my Engineering final thesis.", 'https://drive.google.com/file/d/1un5qq_vYRynr4WsTjWpxVwAQf1tQWgKw/view?usp=sharing', 'https://estudy.salle.url.edu/pluginfile.php/1/theme_moove/logo/1601481989/logo-lasalle-estudy.png' ))
projects.push(new Project("Simple Task Manager", "CD/CI", "A simple task manager with Firebase dependencies.", "https://pgomezponce.github.io/digital-backlog/","https://github.com/pgomezponce/digital-backlog/blob/master/assets/images/favicon.png?raw=true"));

