import user from 'modules/users/models/user';

async function list(request, response) {
    return  response.send({records: await user.findAll()});
}

function show(request, response) {
    return response.send(request.params.id);
}

function create(request, response) {
    return response.send('Listing');
}

function update(request, response) {
    return response.send('Listing');
}

function remove(request, response) {
    return response.send('Listing');
}

export default {
    list,
    show,
    create,
    update,
    remove
}



