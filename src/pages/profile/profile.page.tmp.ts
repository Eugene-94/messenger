export default `
    <div class="container">
        <div class="profile-page">
            <div class="profile">
                <div class="profile__avatar-block">
                    <button class="profile__avatar" type="button"></button>
                </div>

                <h1 class="profile__username">Иван</h1>

                {{> userInfo userInfo readonly='true' }}
                
                <div class="profile__actions">
                    <div>
                        <a href="#">Изменить данные</a>
                    </div>
                    <div>
                        <a href="#">Изменить пароль</a>
                    </div>
                    <div>
                        <a href="#">Выйти</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
