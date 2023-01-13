export  function request<TResponse>(
    url: string,
    config: RequestInit = {}
): Promise<TResponse>{
    return fetch(url, config)
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            console.log(error);
        })   
}

export const api = {
    get<TResponse>(
        url: string,
        config: RequestInit = {}
    ): Promise<TResponse>{
        return fetch(url, config)
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                console.log(error);
            })   
    }
}