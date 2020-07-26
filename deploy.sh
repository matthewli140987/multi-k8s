docker build -t matthewli1409/multi-client:latest -t matthewli1409/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t matthewli1409/multi-server:latest -t matthewli1409/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t matthewli1409/multi-worker:latest -t matthewli1409/multi-worker:$SHA -f ./worker/Dockerfile ./worker
docker push matthewli1409/multi-client:latest
docker push matthewli1409/multi-server:latest
docker push matthewli1409/multi-worker:latest
docker push matthewli1409/multi-client:$SHA
docker push matthewli1409/multi-server:$SHA
docker push matthewli1409/multi-worker:$SHA
kubectl apply -f k8s
kubectl set image deployments/server-deployment server=matthewli1409/multi-server:$SHA
kubectl set image deployments/client-deployment client=matthewli1409/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=matthewli1409/multi-worker:$SHA
