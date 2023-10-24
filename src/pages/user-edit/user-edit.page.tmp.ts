export default `
    <div class="user-edit-page">
        <div class="profile">
            <div class="profile__avatar-block">
                <button class="profile__avatar" type="button"></button>
            </div>

            <form class="user-edit-page__form">
                {{> userInfo userInfo }}
            </form>

            <div class="flex flex-center">
                {{> button label='Сохранить' type='submit' }}
            </div>
        </div>
    </div>
`;
