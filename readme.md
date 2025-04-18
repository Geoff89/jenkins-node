```docker run  -d --name jenkins-docker \
   -p 8080:8080 -p 50000:50000 \
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v /usr/bin/docker:/usr/bin/docker
   -u root
   -e DOCKER_GID=$(getent group docker | cut -d: -f3) \
   jenkins/jenkins:lts
```

- Executing the jenkins container
`docker exec -it jenkins-docker bash`

- Add the docker group
`groupadd -for -g $DOCKER_GID docker`

- Append jenkins user into docker group
`usermod -aG docker jenkins`

- Exit and restart the container
`exit`
`docker restart jenkins-docker` 