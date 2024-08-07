import http from 'http'

const port = 3000;
const server=http.createServer((req,res)=>{
    if (req.url === '/html') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html");
        const htmlContent=`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RESUME</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        header {
            background: #333;
            color: #fff;
            padding: 1rem 0;
            text-align: center;
        }

        header h1 {
            margin: 0;
        }

        section {
            padding: 1rem;
            margin: 1rem auto;
            max-width: 800px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        section h2 {
            margin-top: 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Kartheek Billa</h1>
        <p>Web Developer</p>
    </header>
    <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:kartheekbilla147@gmail.com">kartheekbilla147@gmail.com</a></p>
        <p>Phone: 9182844959</p>
        <p>GitHub: <a href="https://github.com/kartheekbilla" target="_blank">github.com/in/kartheekbilla</a></p>
    </section>
    <section id="summary">
        <h2>Summary</h2>
        <p>Web Developer with a background in developing high-quality websites and web applications. Skilled in HTML, CSS, JavaScript, and various frameworks.</p>
    <section id="education">
        <h2>Education</h2>
        <p>Bachelor of Science in Computer Science</p>
        <p>Sagi Rama Krishnam Raju Engineering College</p>
        <p>2023 - 2027</p>
    </section>
    <section id="skills">
        <h2>Skills</h2>
        <ul>
            <li>C, Java, Python</li>
            <li>HTML, CSS, JavaScript</li>
            <li>React</li>
            <li>Node.js, Express</li>
            <li>MongoDB</li>
        </ul>
    </section>

    <script src="resume.js"></script>
</body>
</html>`;
    res.end(htmlContent);
    }
    else if (req.url === '/myself') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain");

        res.write("Kartheek Billa\n");
        res.write("Web Developer\n\n");

        res.write("Contact Me\n");
        res.write("Email: kartheekbilla147@gmail.com\n");
        res.write("Phone: 9182844959\n");
        res.write("GitHub: github.com/in/kartheekbilla\n\n");

        res.write("Summary\n");
        res.write("Web Developer with a background in developing high-quality websites and web applications. Skilled in HTML, CSS, JavaScript, and various frameworks.\n\n");

        res.write("Education\n");
        res.write("Bachelor of Science in Computer Science\n");
        res.write("Sagi Rama Krishnam Raju Engineering College\n");
        res.write("2023 - 2027\n\n");

        res.write("Skills\n");
        res.write("- C, Java, Python\n");
        res.write("- HTML, CSS, JavaScript\n");
        res.write("- React\n");
        res.write("- Node.js, Express\n");
        res.write("- MongoDB\n\n");

        res.write("Hobbies\n");
        res.write("- Coding and learning new technologies\n");
        res.write("- Reading tech blogs and articles\n");
        res.write("- Playing Badminton, Basketball\n");
        res.write("- Traveling and exploring new people and their culture\n");

        
        res.end()
    }
    else if (req.url.startsWith('/resume')) {
  
        const section = req.url.split('/')[2];
        if (section === 'skills' || section === 'qualifications') {
            if (resumeData[section]) {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(resumeData[section]));
            } else {
                res.statusCode = 404;
                res.setHeader("Content-Type", "text/plain");
                res.end("Section not found\n");
            }
        } else if (req.url === '/resume') {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(resumeData));
        } else {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain");
            res.end("Section not found\n");
        }
    } else {
        // Respond with "Page Not Found" for other URLs
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Page Not Found\n");
    }
});
const resumeData = {
    contact: {
        "Name": "Kartheek Billa",
        "Email": "kartheekbilla147@gmail.com",
        "Phone": "9182844959",
        "GitHub": "github.com/in/kartheekbilla"
    },
    summary: "Web Developer with a background in developing high-quality websites and web applications. Skilled in HTML, CSS, JavaScript, and various frameworks.",
    education: {
        "Degree": "Bachelor of Science",
        "Major": "Computer Science",
        "Institution": "Sagi Rama Krishnam Raju Engineering College",
        "Location": "Andhra Pradesh, India",
        "Dates": "2023 - 2027"
    },
    skills: {
        "Programming Languages": "C, Java, Python",
        "Web Technologies": "HTML, CSS, JavaScript",
        "Frameworks": "React",
        "Server-Side": "Node.js, Express",
        "Database": "MongoDB"
    },
    hobbies: [
        "Coding and learning new technologies",
        "Reading tech blogs and articles",
        "Playing Badminton, Basketball",
        "Traveling and exploring new people and their culture"
    ]
};

server.listen(port, () => {
    console.log("Server running at",+port);
});