<script setup lang="ts">
import { ref } from 'vue'

import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const isOpen = ref<boolean>(true)

const title = ref<string>('')
const body = ref<string>('')
const labels = ref<string[]>([])
</script>

<template>
	<div class="q-pa-md q-gutter-sm">
		<q-dialog v-model="isOpen" position="bottom" full-width persistent >
			<q-card class="q-pa-md q-gutter-md" style="width: 500px">
				<q-form>
					<q-card-section class="column no-wrap">
						<div>
							<div class="text-weight-bold">New issue</div>
							<div class="text-grey">Add new issue with labels</div>
						</div>

						<q-space />

						<div>
							<q-input
								label="Title"
								v-model="title"
								filled
                dense
								placeholder="Title"
								class="q-mb-sm"
							/>

							<q-select
								label="Multiple selection"
								v-model="labels"
								:options="[]"
								filled
                dense
								multiple
								use-chips
								stack-label
								class="q-mb-sm"
							/>
						</div>

						<!-- Markdown editor -->
            <MdEditor v-model="body" placeholder="# Markdown" language="en-US" />
					</q-card-section>

					<q-card-actions align="right">
						<q-btn
              label="Cancel"
              v-close-popup
              flat
              color="dark" />
						<q-space />
						<q-btn
							type="submit"
							flat
							label="Add Issue"
							v-close-popup
							color="dark"
						/>
					</q-card-actions>
				</q-form>
			</q-card>
		</q-dialog>
	</div>
</template>

<style scoped></style>
