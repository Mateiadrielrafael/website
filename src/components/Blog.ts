import { html } from '@popeindustries/lit-html-server'
import { withCss } from '../helpers/withCss'

export const Blog = () => html`
    ${withCss('blog')}
    <div class="full center">
        <div class="title">
            This page is still in construction!
        </div>
    </div>
`
