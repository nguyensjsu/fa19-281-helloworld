const baseURL = "http://localhost:8080"

export function getURL (route) {
    if(route.startsWith("/")){
        return baseURL + route;
    }
    return baseURL + "/" +route;
}

export const enrollmentServiceURL = "http://enrollment-nlb-047c901a12a29dbf.elb.us-west-2.amazonaws.com";