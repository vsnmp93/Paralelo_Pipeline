pipeline {
    agent any
    tools {node "Node"}
    stages {

    stage('Cypress Parallel Test Suite'){
        parallel{
            stage('Slave 1'){
                agent{
                    label "Agent2_1"
                }
                steps {
                    git url: 'https://github.com/vsnmp93/Paralelo_Pipeline.git'
                    bat 'npm install'
                    bat 'npm update'
                    bat 'npx cypress run --record --key 1801959b-b6a0-4ca1-be3f-200f0ff77b46 --parallel'
                }
            }
          
            stage('Slave 2'){
                agent{
                    label "Agent2_2"
                }
                steps {
                    git url: 'https://github.com/vsnmp93/Paralelo_Pipeline.git'
                    bat 'npm install'
                    bat 'npm update'
                    bat 'npx cypress run --record --key 1801959b-b6a0-4ca1-be3f-200f0ff77b46 --parallel'
                }
            }
        
           stage('Slave 3'){
                agent{
                    label "Agent2_3"
                }
                steps {
                    git url: 'https://github.com/vsnmp93/Paralelo_Pipeline.git'
                    bat 'npm install'
                    bat 'npm update'
                    bat 'npx cypress run --record --key 1801959b-b6a0-4ca1-be3f-200f0ff77b46 --parallel'
                }
            }
      
            stage('Slave 4'){
                agent{
                    label "Agent2_4"
                }
                steps {
                    git url: 'https://github.com/vsnmp93/Paralelo_Pipeline.git'
                    bat 'npm install'
                    bat 'npm update'
                    bat 'npx cypress run --record --key 1801959b-b6a0-4ca1-be3f-200f0ff77b46 --parallel'
                }
            }
        
            // stage('Slave 5'){
            //     agent{
            //         label "Agent2_5"
            //     }
            //     steps {
            //         git url: 'https://github.com/vsnmp93/Paralelo_Pipeline.git'
            //         bat 'npm install'
            //         bat 'npm update'
            //         bat 'npx cypress run --record --key 1801959b-b6a0-4ca1-be3f-200f0ff77b46 --parallel'
            //     }
            // }
        }
    }

    }
}
