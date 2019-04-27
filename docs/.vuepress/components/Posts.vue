<template>
    <div class="posts" v-if="posts.length">
        <div class="post" v-for="post in posts">
            <!-- <div>
                <img v-if="post.frontmatter.image" :src="$withBase(post.frontmatter.image)" alt="">
            </div> -->
            <div>
                <p>{{post.frontmatter.date}}</p>
            </div>
            <h2>
                <router-link :to="post.path">
                    {{post.frontmatter.title}}
                </router-link>
            </h2>
            <p>{{post.frontmatter.description}} <router-link :to="post.path">Skaityti toliau</router-link></p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["page"],
        computed: {
            posts() {
                let currentPage = this.page ? this.page : this.$page.path;
                let posts = this.$site.pages
                    .filter(x => {
                        return x.path.match(new RegExp(`(${currentPage})`));
                    })
                    .sort((a, b) => {
                        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
                    });
                return posts;
            }
        }
    };
</script>