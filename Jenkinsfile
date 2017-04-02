pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'python --version'
            }
        }
        stage('size') {
            steps {
                sh 'du -sh *'
            }
        }
    }
}