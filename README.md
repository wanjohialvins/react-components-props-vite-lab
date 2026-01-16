# Eragondevs Personal Blog

## Component Documentation
To maintain organization and identify functionality, the following components make up the application's structure:

### 1. App
- **Functionality**: The root component that manages the state and layout of the blog.
- **Connections**: Parent to `Header`, `About`, and `ArticleList`. It passes data from `blogData` to its children via props.

### 2. Header
- **Functionality**: Renders the blog branding.
- **Connections**: Child of `App`. Receives the `name` prop.

### 3. About
- **Functionality**: Displays the blog logo and a short description.
- **Connections**: Child of `App`. Receives `image` and `about` props.

### 4. ArticleList
- **Functionality**: A container that iterates over blog posts and renders individual articles.
- **Connections**: Child of `App`. Parent to multiple `Article` components. Receives the `posts` prop.

### 5. Article
- **Functionality**: Displays a single blog post's title, date, and preview text.
- **Connections**: Child of `ArticleList`. Receives `title`, `date`, and `preview` props.

## Documentation

### How to Run the Project
1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Start the Development Server**:
   ```bash
   npm run dev
   ```
3. **Run Automated Tests**:
   ```bash
   npm test
   ```

### Visual Preview
![Eragondevs Blog Site](images/demo.png)

## Code Comments
- **Header.jsx**: Contains comments explaining branding logic and prop flow.
- **About.jsx**: Documents the default image logic and accessibility requirements.
- **ArticleList.jsx**: Explains the mapping logic used to render multiple articles.
- **Article.jsx**: Details the default date handling for post metadata.
