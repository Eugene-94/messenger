export default `
    <style>
        .fieldset {
            display: grid;
            grid-gap: 16px;
            grid-template-columns: 1fr 1fr;
        }
    </style>
    <div>

        <div>
            <div class="fieldset">
                <div class="form-control">
                    <input
                            class="input-text"
                            type="text" value="{{ first_name }}"
                            {{#if readonly}}disabled{{/if}}
                    >
                </div>
                <div class="form-control">
                    <input
                            class="input-text"
                            type="text" value="{{ second_name }}"
                            {{#if readonly}}disabled{{/if}}
                    >
                </div>
            </div>

            <hr>

            <div class="fieldset">
                <div class="form-control">
                    <input
                            class="input-text"
                            type="text" value="{{ email }}"
                            {{#if readonly}}disabled{{/if}}
                    >
                </div>
                <div class="form-control">
                    <input
                            class="input-text"
                            type="text" value="{{ login }}"
                            {{#if readonly}}disabled{{/if}}
                    >
                </div>
            </div>

            <hr>

            <div class="fieldset">
                <div class="form-control">
                    <input
                            class="input-text"
                            type="text" value="{{ display_name }}"
                            {{#if readonly}}disabled{{/if}}
                    >
                </div>

                <div class="form-control">
                    <input
                            class="input-text"
                            type="text" value="{{ phone }}"
                            {{#if readonly}}disabled{{/if}}
                    >
                </div>
            </div>

        </div>
    </div>
`;
