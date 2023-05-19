import UserModal from '@/server/modals/user/index';

export default defineEventHandler(async () => {
    return await UserModal.find();
});