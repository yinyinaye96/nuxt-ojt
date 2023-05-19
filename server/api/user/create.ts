import UserModal from '@/server/modals/user/index';
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    try {
        await UserModal.create(body);
        return { message: 'Book created' };
      } catch (e) {
        throw createError({
          message: 'Create Failed !!'
        });
      }
})