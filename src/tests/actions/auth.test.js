import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
    const uid = 'abc123';
    const actions = login(uid);
    expect(actions).toEqual({
        type: 'LOGIN',
        uid
    });   
});

test('should generate logout action object', () => {
    const actions = logout();
    expect(actions).toEqual({
        type: 'LOGOUT'
    });  
});