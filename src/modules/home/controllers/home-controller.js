export default class HomeController {
    homePage(request, response)
    {
        return `Welcome HomePage ${request.path}`;
    }
}
