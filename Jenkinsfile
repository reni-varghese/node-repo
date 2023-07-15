pipeline {
    agent any
    stages {
        stage("Initialization") {
            step {
                echo "Initialization step"
            }
        }
        stage("buildingDocker"){
            step {
                docker build -t renivarghese/server:latest .
            }
        }
        stage("All done"){
            step { 
                echo "Process over"
            }
        }
    }
}