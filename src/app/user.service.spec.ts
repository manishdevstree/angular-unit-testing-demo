import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('should return user data', () => {
    const user = service.getUser();
    expect(user.name).toBe('Manish');
    expect(user.role).toBe('Admin');
  });
});
