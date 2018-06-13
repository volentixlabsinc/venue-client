<template>
  <div class="box">
    <div class="box-content">
      <h2 class="title"> Language</h2>
      <footer class="box-footer">
        <div class="box-footer-item">
          <div class="rows">
            <h2 class="subtitle">Set the site language</h2>
            <div class="dropdown">
              <div class="dropdown-trigger">
                <button class="button is-primary-invert" aria-haspopup="true" aria-controls="dropdown-menu2">
                  <span>Choose Language</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"/>
                  </span>
                </button>
              </div>
              <div id="dropdown-menu2" class="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <div class="dropdown-item">
                    <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                  </div>
                  <hr class="dropdown-divider">
                  <div class="dropdown-item">
                    <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                  </div>
                  <hr class="dropdown-divider">
                  <a href="#" class="dropdown-item">
                    This is a link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
