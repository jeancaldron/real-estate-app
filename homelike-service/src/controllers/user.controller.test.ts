import { User } from "../models/user.model";
import * as dbHandler from '../config/testDB';

beforeAll(async () => {
    await dbHandler.connect()
});

afterEach(async () => {
    await dbHandler.clearDatabase()
});

afterAll(async () => {
    await dbHandler.closeDatabase()
});

describe('User test', () => {
    it('can be created correctly', async () => {
        expect.assertions(2)
        const user = new User({
            first_name:"test name",
            last_name:"test lastname",
            email:"test@gmail.com"
        });
        user.setPassword("blablabla");
        await user.save()
        const UserInDb = await User.findOne({email: "test@gmail.com"}).exec()
        console.log('User document from memory-db', UserInDb)
        expect(UserInDb.email).toEqual('test@gmail.com')
        expect(UserInDb.first_name).toEqual('test name')
    });
});